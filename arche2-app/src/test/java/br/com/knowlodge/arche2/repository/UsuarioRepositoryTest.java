package br.com.knowlodge.arche2.repository;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import br.com.knowlodge.arche2.model.Usuario;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:application-config-test.xml")
@ActiveProfiles("local")
public class UsuarioRepositoryTest {
	@Autowired
	protected UsuarioRepository repository;

	@Before
	public void before() {
		repository.deleteAll();
		// save a couple of Usuarios
		repository.save(new Usuario("Alice", "Smith"));
		repository.save(new Usuario("Bob", "Smith"));
	}

	@Test
	public void testGetBySobrenome() {
		List<Usuario> Usuarios = repository.findBySobrenome("Smith");
		assertEquals(2, Usuarios.size());
	}
}