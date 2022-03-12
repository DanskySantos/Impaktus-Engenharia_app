package model.application.config;

import model.application.entities.*;
import model.application.repositories.*;
import model.application.entities.Category;
import model.application.entities.Provider;
import model.application.repositories.CategoryRepository;
import model.application.repositories.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

//	@Autowired
//	private UserRepository userRepository;
//
//	@Override
//	public void run(String... args) throws Exception {
//
//	}

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private ProviderRepository providerRepository;

	@Override
	public void run(String... args) throws Exception {

		Category cat1 = new Category(null, "Fumaça");
		Category cat2 = new Category(null, "Serralheiro");
		Category cat3 = new Category(null, "Carpinteiro");

		Provider p1 = new Provider(null, "dansky", "01572761121", "dansky123@hotmail.com", "6239202090", "62982167889", "avenida timbiras qd 31 lt 08 setor progresso", "Julio");
		Provider p2 = new Provider(null, "maria", "01572761121", "dansky123@hotmail.com", "6239202090", "62982167889", "avenida timbiras qd 31 lt 08 setor progresso", "Julio");
		Provider p3 = new Provider(null, "roberto", "01572761121", "dansky123@hotmail.com", "6239202090", "62982167889", "avenida timbiras qd 31 lt 08 setor progresso", "Julio");
		Provider p4 = new Provider(null, "daniel", "01572761121", "dansky123@hotmail.com", "6239202090", "62982167889", "avenida timbiras qd 31 lt 08 setor progresso", "Julio");
		Provider p5 = new Provider(null, "marcela", "01572761121", "dansky123@hotmail.com", "6239202090", "62982167889", "avenida timbiras qd 31 lt 08 setor progresso", "Julio");

		categoryRepository.saveAll(Arrays.asList(cat1, cat2, cat3));
		providerRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5));

		p1.getCategories().add(cat2);
		p2.getCategories().add(cat1);
		p2.getCategories().add(cat3);
		p3.getCategories().add(cat3);
		p4.getCategories().add(cat3);
		p5.getCategories().add(cat2);

		providerRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5));
	}
}
