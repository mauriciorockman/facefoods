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


}

