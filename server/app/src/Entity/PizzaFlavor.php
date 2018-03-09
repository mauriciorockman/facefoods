<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * PizzaFlavor
 *
 * @ORM\Table(name="pizza_flavor", indexes={@ORM\Index(name="pizza_flavor_fk0", columns={"pizza_flavor_type_id"}), @ORM\Index(name="pizza_flavor_fk1", columns={"restaurant_id"})})
 * @ORM\Entity
 */
class PizzaFlavor
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
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=false)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="price", type="decimal", precision=10, scale=0, nullable=false)
     */
    private $price;

    /**
     * @var \Restaurants
     *
     * @ORM\ManyToOne(targetEntity="Restaurants")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="restaurant_id", referencedColumnName="fb_id")
     * })
     */
    private $restaurant;

    /**
     * @var \PizzaFlavorTypes
     *
     * @ORM\ManyToOne(targetEntity="PizzaFlavorTypes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="pizza_flavor_type_id", referencedColumnName="id")
     * })
     */
    private $pizzaFlavorType;



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
     * Set name
     *
     * @param string $name
     *
     * @return PizzaFlavor
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
     * Set description
     *
     * @param string $description
     *
     * @return PizzaFlavor
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set price
     *
     * @param string $price
     *
     * @return PizzaFlavor
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return string
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set restaurant
     *
     * @param \Restaurants $restaurant
     *
     * @return PizzaFlavor
     */
    public function setRestaurant(\Restaurants $restaurant = null)
    {
        $this->restaurant = $restaurant;

        return $this;
    }

    /**
     * Get restaurant
     *
     * @return \Restaurants
     */
    public function getRestaurant()
    {
        return $this->restaurant;
    }

    /**
     * Set pizzaFlavorType
     *
     * @param \PizzaFlavorTypes $pizzaFlavorType
     *
     * @return PizzaFlavor
     */
    public function setPizzaFlavorType(\PizzaFlavorTypes $pizzaFlavorType = null)
    {
        $this->pizzaFlavorType = $pizzaFlavorType;

        return $this;
    }

    /**
     * Get pizzaFlavorType
     *
     * @return \PizzaFlavorTypes
     */
    public function getPizzaFlavorType()
    {
        return $this->pizzaFlavorType;
    }
}
