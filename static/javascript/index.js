 const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
      link.addEventListener('click', function () {
        links.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
      });
    });

    function showDetails(section, title, description) {
      if (section === 'experience') {
        document.getElementById("detailsPanel").innerHTML = `
          <h2>${title}</h2>
          <p>${description}</p>
        `;
      } else if (section === 'project') {
        document.getElementById("details-box").innerHTML = `
          <h3>${title}</h3>
          <p>${description}</p>
        `;
      }
    }

    function detectDevice() {
      const width = window.innerWidth;
      let device = '';
      if (width < 768) device = 'Mobile';
      else if (width < 1024) device = 'Tablet';
      else device = 'Laptop/Desktop';
      alert(`You're using a ${device} device.`);
    }

    function toggleMenu() {
      const menu = document.getElementById("navMenu");
      menu.classList.toggle("show");
    }