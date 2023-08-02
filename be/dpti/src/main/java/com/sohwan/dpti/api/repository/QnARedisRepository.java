package com.sohwan.dpti.api.repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sohwan.dpti.api.dto.QnADTO;
import com.sohwan.dpti.common.exception.NotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class QnARedisRepository {

    private final RedisTemplate redisTemplate;
    private final ObjectMapper objectMapper;

    public List<QnADTO> getList(String id) {
        List<QnADTO> result = new ArrayList<>();

        redisTemplate.execute(new RedisCallback() {
            @Override
            public Object doInRedis(RedisConnection connection) throws DataAccessException {
                ScanOptions options = ScanOptions.scanOptions().match(id + "*").count(20).build();
                Cursor<byte[]> entries = connection.scan(options);

                while (entries.hasNext()) {
                    String key = new String(entries.next());
                    result.add(get(key).orElseThrow(NotFoundException::new));
                }

                return result;
            }
        });

        return result;
    }

    public Optional<QnADTO> get(String key) {
        Object result = redisTemplate.opsForValue().get(key);
        return result == null ? Optional.empty()
                : Optional.of(objectMapper.convertValue(result, QnADTO.class));
    }

    public void set(String key, QnADTO qnADTO) {
        redisTemplate.opsForValue().set(key, qnADTO);
    }
}
