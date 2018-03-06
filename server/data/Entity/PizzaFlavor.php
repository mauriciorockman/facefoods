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
     * @var \PizzaFlavorTypes
     *
     * @ORM\ManyToOne(targetEntity="PizzaFlavorTypes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="pizza_flavor_type_id", referencedColumnName="id")
     * })
     */
    private $pizzaFlavorType;

    /**
     * @var \Restaurants
     *
     * @ORM\ManyToOne(targetEntity="Restaurants")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="restaurant_id", referencedColumnName="fb_id")
     * })
     */
    private $restaurant;


}

