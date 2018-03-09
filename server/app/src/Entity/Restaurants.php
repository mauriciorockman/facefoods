<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Restaurants
 *
 * @ORM\Table(name="restaurants", indexes={@ORM\Index(name="restaurants_fk0", columns={"agency_id"}), @ORM\Index(name="user_id", columns={"user_id"})})
 * @ORM\Entity
 */
class Restaurants
{
    /**
     * @var string
     *
     * @ORM\Column(name="fb_id", type="string", length=50, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $fbId;

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=100, nullable=false)
     */
    private $address;

    /**
     * @var string
     *
     * @ORM\Column(name="postal_code", type="string", length=15, nullable=false)
     */
    private $postalCode;

    /**
     * @var string
     *
     * @ORM\Column(name="fb_pixel_id", type="string", length=20, nullable=false)
     */
    private $fbPixelId;

    /**
     * @var string
     *
     * @ORM\Column(name="fb_page_token", type="string", length=255, nullable=false)
     */
    private $fbPageToken;

    /**
     * @var \Agencies
     *
     * @ORM\ManyToOne(targetEntity="Agencies")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="agency_id", referencedColumnName="id")
     * })
     */
    private $agency;

    /**
     * @var \Users
     *
     * @ORM\ManyToOne(targetEntity="Users")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user_id", referencedColumnName="userID")
     * })
     */
    private $user;



    /**
     * Get fbId
     *
     * @return string
     */
    public function getFbId()
    {
        return $this->fbId;
    }

    /**
     * Set address
     *
     * @param string $address
     *
     * @return Restaurants
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
     * Set postalCode
     *
     * @param string $postalCode
     *
     * @return Restaurants
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
     * Set fbPixelId
     *
     * @param string $fbPixelId
     *
     * @return Restaurants
     */
    public function setFbPixelId($fbPixelId)
    {
        $this->fbPixelId = $fbPixelId;

        return $this;
    }

    /**
     * Get fbPixelId
     *
     * @return string
     */
    public function getFbPixelId()
    {
        return $this->fbPixelId;
    }

    /**
     * Set fbPageToken
     *
     * @param string $fbPageToken
     *
     * @return Restaurants
     */
    public function setFbPageToken($fbPageToken)
    {
        $this->fbPageToken = $fbPageToken;

        return $this;
    }

    /**
     * Get fbPageToken
     *
     * @return string
     */
    public function getFbPageToken()
    {
        return $this->fbPageToken;
    }

    /**
     * Set agency
     *
     * @param \Agencies $agency
     *
     * @return Restaurants
     */
    public function setAgency(\Agencies $agency = null)
    {
        $this->agency = $agency;

        return $this;
    }

    /**
     * Get agency
     *
     * @return \Agencies
     */
    public function getAgency()
    {
        return $this->agency;
    }

    /**
     * Set user
     *
     * @param \Users $user
     *
     * @return Restaurants
     */
    public function setUser(\Users $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \Users
     */
    public function getUser()
    {
        return $this->user;
    }
}
