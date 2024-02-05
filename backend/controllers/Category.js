
const Category = require("../models/Category");
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

exports.createCategory = async (req, res) => {
	try {
		const { name, description } = req.body;
		if (!name) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
		const CategorysDetails = await Category.create({
			name: name,
			description: description,
		});
		console.log(CategorysDetails);
		return res.status(200).json({
			success: true,
			message: "Categorys Created Successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message,
		});
	}
};

exports.showAllCategories = async (req, res) => {
	try {
        console.log("INSIDE SHOW ALL CATEGORIES");
		const allCategorys = await Category.find({});
		res.status(200).json({
			success: true,
			data: allCategorys,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

//categoryPageDetails 

exports.categoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body;
    console.log("PRINTING CATEGORY ID: ", categoryId);

    // Get courses for the specified category
    const selectedCategory = await Category.findById(categoryId)
      .populate({
        path: "courses",
        match: { status: "Published" },
        populate: "ratingAndReviews",
      })
      .exec();

    // Handle the case when the category is not found
    if (!selectedCategory) {
      console.log("Category not found.");
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    // Handle the case when there are no courses
    if (selectedCategory.courses.length === 0) {
      console.log("No courses found for the selected category.");
      return res.status(404).json({
        success: false,
        message: "No courses found for the selected category.",
      });
    }

    // Get courses for other categories
    const categoriesExceptSelected = await Category.find({ _id: { $ne: categoryId } });

    // Check if categoriesExceptSelected array is empty
    if (categoriesExceptSelected.length === 0) {
      console.error("No categories found except the selected one.");
      return res.status(404).json({
        success: false,
        message: "No categories found except the selected one.",
      });
    }

    // Select a random category from categoriesExceptSelected
    const selectedCategoryIndex = getRandomInt(categoriesExceptSelected.length);
    const selectedDifferentCategory = categoriesExceptSelected[selectedCategoryIndex];

    // Check if the selected category is undefined
    if (!selectedDifferentCategory) {
      console.error("Selected category is undefined.");
      return res.status(404).json({
        success: false,
        message: "No categories found except the selected one.",
      });
    }

    // Get courses for the selected different category
    const differentCategory = await Category.findOne(selectedDifferentCategory._id)
      .populate({
        path: "courses",
        match: { status: "Published" },
      })
      .exec();

    // Get top-selling courses across all categories
    const allCategories = await Category.find().populate({
      path: "courses",
      match: { status: "Published" },
      populate: {
        path: "instructor",
      },
    });

    const allCourses = allCategories.flatMap((category) => category.courses);
    const mostSellingCourses = allCourses.sort((a, b) => b.sold - a.sold).slice(0, 10);

    res.status(200).json({
      success: true,
      data: {
        selectedCategory,
        differentCategory,
        mostSellingCourses,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

