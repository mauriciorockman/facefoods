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



    /**
     * Get psid
     *
     * @return string
     */
    public function getPsid()
    {
        return $this->psid;
    }

    /**
     * Set firstName
     *
     * @param string $firstName
     *
     * @return Clients
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get firstName
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     *
     * @return Clients
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get lastName
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set postalCode
     *
     * @param string $postalCode
     *
     * @return Clients
     */
    public function setPostalCode($postalCode)
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    /**
     * Get postalCode
     *
     * @return string
     */
    public function getPostalCode()
    {
        return $this->postalCode;
    }

    /**
     * Set address
     *
     * @param string $address
     *
     * @return Clients
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set phone
     *
     * @param string $phone
     *
     * @return Clients
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set lastContactDate
     *
     * @param \DateTime $lastContactDate
     *
     * @return Clients
     */
    public function setLastContactDate($lastContactDate)
    {
        $this->lastContactDate = $lastContactDate;

        return $this;
    }

    /**
     * Get lastContactDate
     *
     * @return \DateTime
     */
    public function getLastContactDate()
    {
        return $this->lastContactDate;
    }

    /**
     * Set nOrders
     *
     * @param integer $nOrders
     *
     * @return Clients
     */
    public function setNOrders($nOrders)
    {
        $this->nOrders = $nOrders;

        return $this;
    }

    /**
     * Get nOrders
     *
     * @return integer
     */
    public function getNOrders()
    {
        return $this->nOrders;
    }

    /**
     * Set totalSpent
     *
     * @param string $totalSpent
     *
     * @return Clients
     */
    public function setTotalSpent($totalSpent)
    {
        $this->totalSpent = $totalSpent;

        return $this;
    }

    /**
     * Get totalSpent
     *
     * @return string
     */
    public function getTotalSpent()
    {
        return $this->totalSpent;
    }

    /**
     * Set botStatus
     *
     * @param integer $botStatus
     *
     * @return Clients
     */
    public function setBotStatus($botStatus)
    {
        $this->botStatus = $botStatus;

        return $this;
    }

    /**
     * Get botStatus
     *
     * @return integer
     */
    public function getBotStatus()
    {
        return $this->botStatus;
    }

    /**
     * Set restaurant
     *
     * @param \Restaurants $restaurant
     *
     * @return Clients
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
