package com.ricardo.backend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ricardo.backend.entidades.Cliente;

public interface ClienteRepositorio extends JpaRepository<Cliente, Long>{

}
