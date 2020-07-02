<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        $id = $this->getUser()->getId();
        $name = $this->getUser()->getName();
        $email = $this->getUser()->getEmail();
        
        return $this->json(['user' => ['id' => $id, 'name' => $name, 'email' => $email]]);
    }
}
