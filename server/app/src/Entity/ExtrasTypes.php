<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * ExtrasTypes
 *
 * @ORM\Table(name="extras_types", indexes={@ORM\Index(name="extras_types_fk0", columns={"restaurant_id"})})
 * @ORM\Entity
 */
class ExtrasTypes
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
     * @ORM\Column(name="name", type="string", length=50, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=100, nullable=false)
     */
    private $description;

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
     * @return ExtrasTypes
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
     * @return ExtrasTypes
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
     * Set restaurant
     *
     * @param \Restaurants $restaurant
     *
     * @return ExtrasTypes
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