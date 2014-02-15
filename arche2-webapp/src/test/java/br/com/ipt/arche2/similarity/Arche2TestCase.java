package br.com.ipt.arche2.similarity;

import junit.framework.Assert;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import br.com.ipt.arche2.ornfm.entity.Entidade;
import br.com.ipt.arche2.ornfm.entity.Funcao;
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/applicationContext.xml" })
public class Arche2TestCase {
	
	@Autowired
	public NumericSimilarityAlgorithm simNum;
	
	@Autowired
	public InstanceSimilarityAlgorithm simMin;
	
	@Test
	public void testSimilaridadeSemantica(){
		
		Entidade e1 = new Entidade();
		e1.setId("12ssss");
		e1.setPai("XA1");
		e1.setLimiteValorInferior(0);
		e1.setLimiteValorSuperior(100);
		e1.setNome("XXXA1");
		
		Entidade e2 = new Entidade();
		e2.setId("12333");
		e2.setPai("XXA1");
		e2.setLimiteValorInferior(200);
		e2.setLimiteValorSuperior(-1);
		e2.setNome("XXXA1");
		
		float sim = simMin.similaridadeSemantica(e1, e2);
		
		System.out.printf("\nA similaridade entre e1 e e2 = %.2f ", sim);
		
		Assert.assertNotNull(sim);
	}
	@Test
	public void testLinearFunction(){
		float v1 = 100;
		float v2 = 100;
		
		float ub = 50;
		float lb = 0;
		
		float similarity = simNum.linearFunction(v1, v2, ub, lb);
		
		System.out.printf("\nA similaridade entre %.2f e %.2f = %.2f ", v1, v2, similarity);
		
		Assert.assertNotNull(similarity);
	}
	
	@Test
	public void testLinearFunctionNormalizada(){
		float v1 = 100;
		float v2 = 1000;
		
		float ub1 = 50;
		float lb1 = 0;
		
		float ub2 = 500;
		float lb2 = 0;
		
		float similarity = simNum.linearFunctionNormalizado(v1, v2, ub1, lb1, ub2, lb2);
		
		System.out.printf("\nA similaridade entre %.2f e %.2f = %.2f ", v1, v2, similarity);
		
		Assert.assertNotNull(similarity);
	}
	
	@Test
	public void testGetTotalAtributosSimilares(){
		
		Entidade e1 = new Entidade();
		e1.setId("12");
		e1.setPai("XA1");
		e1.setLimiteValorInferior(0);
		e1.setLimiteValorSuperior(100);
		e1.setNome("XXXA1");
		
		Entidade e2 = new Entidade();
		e2.setId("12");
		e2.setPai("XA1");
		e2.setLimiteValorInferior(0);
		e2.setLimiteValorSuperior(100);
		e2.setNome("XXA1");
		
		int total = simMin.getTotalAtributosSimilares(e1, e2);
		
		System.out.printf("\nO total de atributos iguais entre e1 e e2 = %d ", total);
		
		Assert.assertNotNull(total);
	}
	
	
	@Test
	public void testGetTotalAtributosSimilares2(){
		
		RNFMensuravel r1 = new RNFMensuravel();
		r1.setFuncao(new Funcao());
		RNFMensuravel r2 = new RNFMensuravel();
		
		float similaridade = simMin.similaridadeSemantica(r1, r2);
		
		System.out.printf("\nO total de atributos iguais entre r1 e r2 = %.2f com %d atributo (os) similare (es)...", similaridade, simMin.getTotalAtributosSimilares(r1, r2));
		
		Assert.assertNotNull(similaridade);
	}
	
	
}
 