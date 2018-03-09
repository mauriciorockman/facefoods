<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Pizzas
 *
 * @ORM\Table(name="pizzas", indexes={@ORM\Index(name="pizzas_fk0", columns={"restaurant_id"})})
 * @ORM\Entity
 */
class Pizzas
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
     * @var integer
     *
     * @ORM\Column(name="n_max_flavors", type="integer", nullable=false)
     */
    private $nMaxFlavors;

    /**
     * @var string
     *
     * @ORM\Column(name="picURL", type="string", length=255, nullable=false)
     */
    private $picurl;

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
     * @return Pizzas
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
     * @return Pizzas
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
     * @return Pizzas
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
     * Set nMaxFlavors
     *
     * @param integer $nMaxFlavors
     *
     * @return Pizzas
     */
    public function setNMaxFlavors($nMaxFlavors)
    {
        $this->nMaxFlavors = $nMaxFlavors;

        return $this;
    }

    /**
     * Get nMaxFlavors
     *
     * @return integer
     */
    public function getNMaxFlavors()
    {
        return $this->nMaxFlavors;
    }

    /**
     * Set picurl
     *
     * @param string $picurl
     *
     * @return Pizzas
     */
    public function setPicurl($picurl)
    {
        $this->picurl = $picurl;

        return $this;
    }

    /**
     * Get picurl
     *
     * @return string
     */
    public function getPicurl()
    {
        return $this->picurl;
    }

    /**
     * Set restaurant
     *
     * @param \Restaurants $restaurant
     *
     * @return Pizzas
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
}
