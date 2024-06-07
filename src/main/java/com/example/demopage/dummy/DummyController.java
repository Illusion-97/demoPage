package com.example.demopage.dummy;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class DummyController {
    private final DummyRepository repository;
    @GetMapping
    public Page<Dummy> all(Pageable pageable) {
        return repository.findAll(pageable);
    }
    @GetMapping("byName/{name}")
    public Page<Dummy> findByName(Pageable pageable, @PathVariable String name) {
        return repository.findByNameLike("%"+name+"%",pageable);
    }
}
