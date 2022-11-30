



  const menuBtn = document.querySelector('#menu-btn');
  const closeBtn = document.querySelector('#close-btn')
  const menu = document.querySelector('nav .container ul')



  // OPen sidebar


  menuBtn.addEventListener('click' , () =>{
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display ="inline-block";
  })

  closeBtn.addEventListener('click' , () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  })


  const navItems = document.querySelectorAll('nav ul li');

  const removeActiveClass = () =>{
    navItems.forEach(item =>{
      const link =item.querySelector('a');
      link.classList.remove('active');
    })
  }


  navItems.forEach(item =>{
    const link = item.querySelector('a');
    link.addEventListener('click' , () =>{
      removeActiveClass();
      link.classList.add('active');
    })

  })


  //faqs


  const faqs = document.querySelectorAll('section#faqs article');

  faqs.forEach(faq =>{
    faq.addEventListener('click',() =>{
      faq.classList.toggle('open');

      const icon = faq.querySelector('.icon i');
      if(icon.className === 'fa-solid fa-plus'){
        icon.className = 'fa-solid fa-minus';
      } else{
        icon.className = 'fa-solid fa-plus';

      }




    })

  })


  //scroll nav bar


  window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
  })