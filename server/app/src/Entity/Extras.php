<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Extras
 *
 * @ORM\Table(name="extras", indexes={@ORM\Index(name="extras_fk0", columns={"extra_type_id"})})
 * @ORM\Entity
 */
class Extras
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
     * @var string
     *
     * @ORM\Column(name="price", type="decimal", precision=10, scale=0, nullable=false)
     */
    private $price;

    /**
     * @var \ExtrasTypes
     *
     * @ORM\ManyToOne(targetEntity="ExtrasTypes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="extra_type_id", referencedColumnName="id")
     * })
     */
    private $extraType;



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
     * @return Extras
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
     * @return Extras
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
     * @return Extras
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
     * Set extraType
     *
     * @param \ExtrasTypes $extraType
     *
     * @return Extras
     */
    public function setExtraType(\ExtrasTypes $extraType = null)
    {
        $this->extraType = $extraType;

        return $this;
    }

    /**
     * Get extraType
     *
     * @return \ExtrasTypes
     */
    public function getExtraType()
    {
        return $this->extraType;
    }
}
