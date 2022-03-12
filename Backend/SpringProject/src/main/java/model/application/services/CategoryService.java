package model.application.services;

import model.application.entities.Category;
import model.application.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

	private Long id;

	@Autowired
	private CategoryRepository repository;

	public List<Category> findAll() {
		return repository.findAll();
	}

	//public Category findById(Long id) { return repository.findById(id);}

	public Category findById(Long id) {
		Optional<Category> obj = repository.findById(id);
		return obj.get();
	}

	public Category save(Category category) { return repository.save(category); }

	//public void delete(Integer id) {repository.deleteById(id.longValue());}
}
