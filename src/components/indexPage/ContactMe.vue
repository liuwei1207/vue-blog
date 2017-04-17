<template>
    <section class="content-blog__contact">
        <h2>Get In Touch</h2>
        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
        <div class="row">
            <div>
                <form method="post" action="#">
                    <div class="row uniform 50%">
                        <div class="6u 12u$(xsmall)">
                            <input type="text" name="name" id="name" placeholder="Name">
                        </div>
                        <div class="6u$ 12u$(xsmall)">
                            <input type="email" name="email" id="email" placeholder="Email">
                        </div>
                        <div class="12u$">
                            <textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
                        </div>
                    </div>
                </form>
                <ul class="actions">
                    <li>
                        <input type="submit" value="Send Message">
                    </li>
                </ul>
            </div>
            <div class="4u$ 12u$(small)">
                <ul class="labeled-icons">
                    <li>
                        <h3 class="icon fa-home"><span class="label">Address</span></h3> 1234 Somewhere Rd.
                        <br> Nashville, TN 00000
                        <br> United States
                    </li>
                    <li>
                        <h3 class="icon fa-mobile"><span class="label">Phone</span></h3> 000-000-0000
                    </li>
                    <li>
                        <h3 class="icon fa-envelope-o"><span class="label">Email</span></h3>
                        <a href="#">hello@untitled.tld</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<style>
.content-blog__contact {
    border-top: solid 2px #efefef;
    margin: 4em 0 0 0;
    padding: 4em 0 0 0;
}

.content-blog__contact h2 {
    font-size: 1.5em;
    line-height: 1.5em;
    color: #787878;
    margin: 0 0 1em 0;
}

.content-blog__contact p {
    margin: 0 0 2em 0;
}
</style>
