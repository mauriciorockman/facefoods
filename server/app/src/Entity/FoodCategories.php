<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * FoodCategories
 *
 * @ORM\Table(name="food_categories")
 * @ORM\Entity
 */
class FoodCategories
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="restaurant_id", type="integer", nullable=false)
     */
    private $restaurantId;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=50, nullable=false)
     */
    private $name;

    /**
     * @var integer
     *
     * @ORM\Column(name="category_type_id", type="integer", nullable=false)
     */
    private $categoryTypeId;



    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set restaurantId
     *
     * @param integer $restaurantId
     *
     * @return FoodCategories
     */
    public function setRestaurantId($restaurantId)
    {
        $this->restaurantId = $restaurantId;

        return $this;
    }

    /**
     * Get restaurantId
     *
     * @return integer
     */
    public function getRestaurantId()
    {
        return $this->restaurantId;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return FoodCategories
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set categoryTypeId
     *
     * @param integer $categoryTypeId
     *
     * @return FoodCategories
     */
    public function setCategoryTypeId($categoryTypeId)
    {
        $this->categoryTypeId = $categoryTypeId;

        return $this;
    }

    /**
     * Get categoryTypeId
     *
     * @return integer
     */
    public function getCategoryTypeId()
    {
        return $this->categoryTypeId;
    }
}
