package com.ricardo.backend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ricardo.backend.entidades.Cliente;

// Camada de acesso ao banco de dados
public interface ClienteRepositorio extends JpaRepository<Cliente, Integer>{

}
