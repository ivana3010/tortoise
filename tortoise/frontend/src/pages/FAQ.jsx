import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate()
  return (
    <div className='relative flex overflow-hidden'>
      <img
        className="w-full h-full object-cover absolute z-0 object-right"
        src={assets.futer2}
        alt=""
      />
      <div className='relative flex flex-col mx-auto space-y-6 w-full lg:w-2/3 px-4 md:px-8 '>
        <h1 className='text-primary text-center font-medium text-2xl mb-4'>Frequently Asked Questions </h1>
        <Accordion >
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">Can tortoises recognize their owners?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
            Yes! Tortoises can recognize their owners. While they don't show affection in the same way as mammals, they can learn to associate their owner with food and care. Over time, a tortoise may become more comfortable around a familiar person, showing signs of recognition by approaching them, following them, or becoming more relaxed in their presence. Some tortoise owners even report their pets responding to their voice or touch. However, this recognition is more based on routine and association rather than deep emotional attachment.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">Are tortoises good pets for beginners?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
            Tortoises can be good pets for beginners, but they require a lot of commitment and care. Unlike traditional pets like cats or dogs, tortoises have specific habitat, diet, and temperature needs. For beginners, smaller and hardier species like the Russian tortoise or Hermann’s tortoise are recommended. They are not the best choice for those looking for an interactive or affectionate pet.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">Do tortoises need company or are they solitary animals?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
            Tortoises are generally solitary animals and do not require companionship. In the wild, they live alone and only interact with others for mating. Unlike social animals, tortoises do not experience loneliness in the way that mammals might. In captivity, keeping multiple tortoises together can sometimes lead to stress, competition for food, or even aggression, especially among males.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">How can you tell how old a tortoise is?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
            Determining the exact age of a tortoise can be challenging, but there are a few methods that can help estimate its age: <br /> <span className='text-primary font-bold'>1.</span> Counting the Growth Rings on the Shell: Tortoises grow by adding layers to their shells, and these layers (called scutes) often have growth rings, similar to the rings of a tree. The rings are more visible in younger tortoises, but they become less pronounced as the tortoise matures. <br />
            <span className='text-primary font-bold'>2.</span>  Size and Weight: Tortoises grow at different rates depending on their species, but younger tortoises generally have a smaller size and lighter weight. <br />
            <span className='text-primary font-bold'>3.</span> Observing Behavior and Maturity: Young tortoises are typically more active and curious, while older tortoises tend to be less active and more sedentary.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">What is the difference between a tortoise and a turtle?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
            Tortoises are land-dwelling animals with dome-shaped shells, while turtles are mostly aquatic, with flatter shells and webbed feet or flippers. Tortoises are herbivores, feeding mainly on plants, while turtles have a more varied diet, including plants, small animals, and fish. The key difference is that tortoises live on land, and turtles are adapted to life in water.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">How fast can tortoises move?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
            Tortoises are generally slow movers. They typically move at a speed of about 0.3 to 0.8 km/h, though some species can reach slightly higher speeds when necessary. Their slow pace is due to their heavy, protective shells and their land-based nature.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">Do tortoises have teeth?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
            No, tortoises do not have teeth. Instead, they have a sharp beak-like structure that they use to bite and cut their food. The edges of their beaks are adapted for their specific diet, whether it's plants or other food types.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">How do tortoises protect themselves from predators?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
            Tortoises protect themselves from predators primarily by retreating into their hard shells. Their shells act as a shield, providing protection from most threats. When a tortoise feels threatened, it can quickly withdraw its head, legs, and tail into the shell, closing the shell with a hard, impenetrable barrier. Some species of tortoises also have strong claws and can dig burrows to hide from predators. Tortoises have predators such as: large birds, snakes, lions, hyenas and crocodiles.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">Can tortoises swim?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
            Tortoises are generally not strong swimmers. Unlike turtles, which are adapted for swimming, tortoises are land animals and are not built for life in the water.
            However, some species of tortoises can swim short distances if needed, especially if they are in shallow water or in danger. They can use their legs to paddle, but they are not as efficient in water as turtles.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon className='text-white' />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ backgroundColor: '#784313' }}
          >
            <Typography className='text-white' component="span">Can tortoises get sick, and what are common health problems?</Typography>
          </AccordionSummary>
          <AccordionDetails className='bg-primary bg-opacity-50 text-white'>
          Yes, they can. Check <button className='text-primary font-semibold underline' onClick={()=> (navigate('/care'))}>care page.</button>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ