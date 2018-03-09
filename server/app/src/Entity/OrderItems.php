<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * OrderItems
 *
 * @ORM\Table(name="order_items", indexes={@ORM\Index(name="order_items_fk0", columns={"order_id"}), @ORM\Index(name="order_items_fk1", columns={"menu_id"})})
 * @ORM\Entity
 */
class OrderItems
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
     * @ORM\Column(name="extras_description", type="string", length=255, nullable=false)
     */
    private $extrasDescription;

    /**
     * @var string
     *
     * @ORM\Column(name="extras_total", type="decimal", precision=10, scale=0, nullable=false)
     */
    private $extrasTotal;

    /**
     * @var string
     *
     * @ORM\Column(name="menu_price", type="decimal", precision=10, scale=0, nullable=false)
     */
    private $menuPrice;

    /**
     * @var integer
     *
     * @ORM\Column(name="quantity", type="integer", nullable=false)
     */
    private $quantity;

    /**
     * @var \Orders
     *
     * @ORM\ManyToOne(targetEntity="Orders")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="order_id", referencedColumnName="id")
     * })
     */
    private $order;

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
     * Set extrasDescription
     *
     * @param string $extrasDescription
     *
     * @return OrderItems
     */
    public function setExtrasDescription($extrasDescription)
    {
        $this->extrasDescription = $extrasDescription;

        return $this;
    }

    /**
     * Get extrasDescription
     *
     * @return string
     */
    public function getExtrasDescription()
    {
        return $this->extrasDescription;
    }

    /**
     * Set extrasTotal
     *
     * @param string $extrasTotal
     *
     * @return OrderItems
     */
    public function setExtrasTotal($extrasTotal)
    {
        $this->extrasTotal = $extrasTotal;

        return $this;
    }

    /**
     * Get extrasTotal
     *
     * @return string
     */
    public function getExtrasTotal()
    {
        return $this->extrasTotal;
    }

    /**
     * Set menuPrice
     *
     * @param string $menuPrice
     *
     * @return OrderItems
     */
    public function setMenuPrice($menuPrice)
    {
        $this->menuPrice = $menuPrice;

        return $this;
    }

    /**
     * Get menuPrice
     *
     * @return string
     */
    public function getMenuPrice()
    {
        return $this->menuPrice;
    }

    /**
     * Set quantity
     *
     * @param integer $quantity
     *
     * @return OrderItems
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get quantity
     *
     * @return integer
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Set order
     *
     * @param \Orders $order
     *
     * @return OrderItems
     */
    public function setOrder(\Orders $order = null)
    {
        $this->order = $order;

        return $this;
    }

    /**
     * Get order
     *
     * @return \Orders
     */
    public function getOrder()
    {
        return $this->order;
    }

    /**
     * Set menu
     *
     * @param \Menu $menu
     *
     * @return OrderItems
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
