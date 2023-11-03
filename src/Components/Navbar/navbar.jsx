import React from 'react'
import "./navbar.css"

function navbar() {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary collapse navbar-collapse" id="navbar">
    <div className="container-fluid">
    <div class="" id="customenavbar">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Software Categories</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">CRM Software</a></li>
                <li><a class="dropdown-item" href="#">Email Marketing Software</a></li>
                <li><a class="dropdown-item" href="#">Help Desk Software</a></li>
                <li><a class="dropdown-item" href="#">Human Resource Software</a></li>
                <li><a class="dropdown-item" href="#">Project Management Software</a></li>
                <li><a class="dropdown-item" href="#">Browse All Categories</a></li>
              </ul>

            </li>

            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service Categories
</a>          <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Accounting Firms</a></li>
                <li><a class="dropdown-item" href="#">Digital Marketing Agencies</a></li>
                <li><a class="dropdown-item" href="#">Advertising Agencies</a></li>
                <li><a class="dropdown-item" href="#">SEO Companies</a></li>
                <li><a class="dropdown-item" href="#">Web Design Companies</a></li>
                <li><a class="dropdown-item" href="#">Browse All Categories</a></li>


              </ul>
            </li>

            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Guides & Research</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Glossary</a></li>
                <li><a class="dropdown-item" href="#">Blog & Research</a></li>
                
              </ul>
            </li>

            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Who We Are</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">About Us</a></li>
                <li><a class="dropdown-item" href="#">FAQs</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
  </nav>


    
    </>
  )
}

export default navbar