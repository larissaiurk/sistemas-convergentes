import categories from '../database/categories.json';
class CategoriesController {

  async index(req, res) {
    return res.json(categories);
  }

  async create(req, res) {
    const { name } = req.body;
    
    categories.push({ 
      id: (categories.length+1), 
      name 
    });

    return res.json(categories);
  }

  async update(req, res) {
    const { id } = req.params;

    const { 
      name 
    } = req.body;

    const categoryIndex = categories.findIndex(category => category.id === parseInt(id));
    if(categoryIndex < 0) {
      return res.status(400).json({error: "Category not found"});
    }
  
    const category = { 
      id: id, 
      name
    };
  
    categories[categoryIndex] = category;

    return res.status(200).json(category);

  }

  async delete(req, res) {
    const { id } = req.params;

    const categoryIndex = categories.findIndex(category => category.id === parseInt(id));
    if(categoryIndex < 0) {
      return res.status(400).json({error: "Category not found"});
    }

    categories.splice(categoryIndex, 1);

    return res.status(200).json(categories);

  }

}

export default new CategoriesController();