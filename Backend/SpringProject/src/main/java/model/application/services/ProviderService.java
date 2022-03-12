package model.application.services;

import model.application.entities.Category;
import model.application.entities.Provider;
import model.application.repositories.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProviderService {

	@Autowired
	private ProviderRepository repository;

	public List<Provider> findAll() {
		return repository.findAll();
	}

	public Provider findById(Long id) {
		Optional<Provider> obj = repository.findById(id);
		return obj.get();
	}

	public List<Provider> findByCategories(List<Category> categories) {
		Set<Provider> providers = repository.findByCategories(new HashSet<>(categories));
		return new ArrayList<>(providers);
	}

	public Provider save(Provider provider) { return repository.save(provider); }

	//public void delete(Integer id) {repository.deleteById(id.longValue());}
}
