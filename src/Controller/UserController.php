<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;

class UserController extends AbstractController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/register", name="register")
     * *param Request $request
     */
    public function register(Request $request)
    {
        $content = json_decode($request->getContent());
        
        $userExists = $this->getDoctrine()->getRepository(User::class)->findOneBy(['email' => $content->email]);
        
        if(!is_null($userExists)) {
            return new Response('Email already exists in database', $status = 400);
        }
            
        $user = new User();
        $user->setName($content->name);
        $user->setEmail($content->email);
        $user->setPassword($content->password);
        
        $user->setPassword($this->passwordEncoder->encodePassword($user, $user->getPassword()));
        $user->setRoles(['ROLE_USER']);
            
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->json($user);
    }

    /**
     * @Route("/login", name="login")
     * *param Request $request
     */
    public function login(Request $request)
    {

        $content = json_decode($request->getContent());

        $userExists = $this->getDoctrine()->getRepository(User::class)->findOneBy(['email' => $content->email]);
       
        if(!is_null($userExists)) {
            $isPasswordValid = $this->passwordEncoder->isPasswordValid($userExists, $content->password);
            $user = ['name' => $userExists->getName(), 'email' => $userExists->getEmail(), 'id' => $userExists->getId()];

            if(!$isPasswordValid) {
                return new Response('Email or password is incorrect', $status = 400);
            }
        }
        return $this->json($user);

    }
}