<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Restaurants
 *
 * @ORM\Table(name="restaurants", indexes={@ORM\Index(name="restaurants_fk0", columns={"agency_id"})})
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
     * @ORM\Column(name="email", type="string", length=70, nullable=false)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=32, nullable=false)
     */
    private $password;

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


}

