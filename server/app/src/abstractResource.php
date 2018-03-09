<?php
    namespace App;

    use Doctrine\ORM\EntityManager;
    use Doctrine\DBAL\Query;

    abstract class AbstractResource
    {
        /**
         * @var \Doctrine\ORM\EntityManager
         */
        protected $entityManager = null;

        public function __construct(EntityManager $entityManager)
        {
            $this->entityManager = $entityManager;
        }
    }