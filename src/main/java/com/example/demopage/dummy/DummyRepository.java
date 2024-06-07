package com.example.demopage.dummy;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DummyRepository extends JpaRepository<Dummy, Long> {
    Page<Dummy> findByNameLike(String name, Pageable pageable);
}
