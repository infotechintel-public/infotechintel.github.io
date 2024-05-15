---
layout: default
title: Home
---

<header class="hero">
    <div class="hero-content">
        <img src="/logo.png" alt="Infotechintel Logo" class="hero-logo">
        <nav class="hero-nav">
            <ul>
                <li><a href="#offerings">Offerings</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#insights">Insights</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>

<section id="content">
    <h1>Welcome to Infotechintel</h1>
    <p>Empowering businesses with innovative technology solutions.</p>

    <img src="/hero-image.jpg" alt="Hero Image" class="hero-image">

    <h2 id="offerings">Our Offerings</h2>
    <table class="offerings-table">
        <tr>
            <th>Service</th>
            <th>Description</th>
        </tr>
        {% for service in site.data.services.services %}
        <tr>
            <td>{{ service.name }}</td>
            <td>{{ service.description }}</td>
        </tr>
        {% endfor %}
    </table>

    <h2 id="industries">Industries We Serve</h2>
    <ul class="industries-list">
        <li>Finance</li>
        <li>Healthcare</li>
        <li>Retail</li>
        <li>Manufacturing</li>
        <li>Telecommunications</li>
        <li>Education</li>
        <li>Government</li>
    </ul>

    <h2 id="about">About Us</h2>
    <p>Infotechintel is committed to delivering exceptional IT solutions that drive business growth and success. Our team of skilled professionals brings diverse expertise and a client-centric approach to every project.</p>
    <p>We prioritize understanding your unique business needs to develop tailored solutions that provide maximum value.</p>

    <h2 id="insights">Insights</h2>
    <ul class="insights-list">
        <li>Latest Trends in IT Consulting</li>
        <li>Optimizing Your IT Infrastructure</li>
        <li>Emerging Technologies</li>
        <li>Cybersecurity Best Practices</li>
        <li>Data Management Strategies</li>
        <li>Success Stories from Our Clients</li>
    </ul>

    <h2 id="contact">Contact Us</h2>
    <p>Contact Infotechintel today to revolutionize your IT infrastructure. Let our experts discuss how our solutions can drive your business forward.</p>
    <p>Email us at: <a href="mailto:it@infotechintel.com">it@infotechintel.com</a></p>
</section>
