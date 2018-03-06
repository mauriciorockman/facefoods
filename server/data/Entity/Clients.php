<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Clients
 *
 * @ORM\Table(name="clients", indexes={@ORM\Index(name="clients_fk0", columns={"restaurant_id"})})
 * @ORM\Entity
 */
class Clients
{
    /**
     * @var string
     *
     * @ORM\Column(name="psid", type="string", length=50, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $psid;

    /**
     * @var string
     *
     * @ORM\Column(name="first_name", type="string", length=50, nullable=false)
     */
    private $firstName;

    /**
     * @var string
     *
     * @ORM\Column(name="last_name", type="string", length=50, nullable=false)
     */
    private $lastName;

    /**
     * @var string
     *
     * @ORM\Column(name="postal_code", type="string", length=50, nullable=false)
     */
    private $postalCode;

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=50, nullable=false)
     */
    private $address;

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string", length=50, nullable=false)
     */
    private $phone;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="last_contact_date", type="datetime", nullable=false)
     */
    private $lastContactDate;

    /**
     * @var integer
     *
     * @ORM\Column(name="n_orders", type="integer", nullable=false)
     */
    private $nOrders;

    /**
     * @var string
     *
     * @ORM\Column(name="total_spent", type="decimal", precision=10, scale=0, nullable=false)
     */
    private $totalSpent;

    /**
     * @var integer
     *
     * @ORM\Column(name="bot_status", type="integer", nullable=false)
     */
    private $botStatus;

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

