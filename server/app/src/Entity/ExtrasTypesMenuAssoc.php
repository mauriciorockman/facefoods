<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * ExtrasTypesMenuAssoc
 *
 * @ORM\Table(name="extras_types_menu_assoc", indexes={@ORM\Index(name="extras_types_menu_assoc_fk0", columns={"extra_type_id"}), @ORM\Index(name="extras_types_menu_assoc_fk1", columns={"menu_id"})})
 * @ORM\Entity
 */
class ExtrasTypesMenuAssoc
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
     * @var \ExtrasTypes
     *
     * @ORM\ManyToOne(targetEntity="ExtrasTypes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="extra_type_id", referencedColumnName="id")
     * })
     */
    private $extraType;

    /**
     * @var \Menu
     *
     * @ORM\ManyToOne(targetEntity="Menu")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="menu_id", referencedColumnName="id")
     * })
     */
    private $menu;



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
     * Set extraType
     *
     * @param \ExtrasTypes $extraType
     *
     * @return ExtrasTypesMenuAssoc
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

    /**
     * Set menu
     *
     * @param \Menu $menu
     *
     * @return ExtrasTypesMenuAssoc
     */
    public function setMenu(\Menu $menu = null)
    {
        $this->menu = $menu;

        return $this;
    }

    /**
     * Get menu
     *
     * @return \Menu
     */
    public function getMenu()
    {
        return $this->menu;
    }
}
