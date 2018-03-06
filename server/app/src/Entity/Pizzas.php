<?php
namespace App\Entity;

use App\Entity;
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


}

