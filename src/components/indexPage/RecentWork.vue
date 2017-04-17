<template>
    <section class="content-blog__list">
        <header>
            <h2>Recent Work</h2>
        </header>
        <div class="row">
            <article class="work-item">
                <a class="thumb">
                    <img src="../../assets/../assets/images/thumbs/01.jpg">
                </a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="work-item">
                <a class="thumb">
                    <img src="../../assets/../assets/images/thumbs/02.jpg">
                </a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="work-item">
                <a class="thumb">
                    <img src="../../assets/../assets/images/thumbs/03.jpg">
                </a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="work-item">
                <a class="thumb">
                    <img src="../../assets/../assets/images/thumbs/04.jpg">
                </a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="work-item">
                <a class="thumb">
                    <img src="../../assets/../assets/images/thumbs/05.jpg">
                </a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article class="work-item">
                <a class="thumb">
                    <img src="../../assets/../assets/images/thumbs/06.jpg">
                </a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
        </div>
        <a href="#" class="content-blog__introduce__button">Read More</a>
    </section>
</template>
<style>
/* # =================================================================
   # content-blog__list
   # ================================================================= */

.content-blog__list {
    border-top: solid 2px #efefef;
    margin: 4em 0 0 0;
    padding: 4em 0 0 0;
}

.content-blog__list h2 {
    font-size: 1.5em;
    line-height: 1.5em;
    color: #787878;
    margin: 0 0 1em 0;
}

.content-blog__list .row {
    margin: 0 0 -1px -2.5em;
    border-bottom: solid 1px transparent;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.content-blog__list .row * {
    padding: 0 0 0 2.5em;
    float: left;
    box-sizing: border-box;
}

.content-blog__list .work-item {
    margin: 0 0 2em 0;
    width: 50%;
    clear: none;
}

.content-blog__list .work-item .thumb {
    display: block;
    width: 100%;
    margin: 0 0 1.5em 0;
    cursor: pointer;
    outline: 0px;
    text-align: center;
    border-radius: 0.35em;
    border: 0;
    display: inline-block;
    position: relative;
    padding: 0;
}

.content-blog__list .work-item .thumb:before {
    background: url(../../assets/images/overlay.png), url(../../assets/images/overlay.png);
    opacity: 0.5;
}

.content-blog__list .work-item .thumb:hover:before {
    opacity: 1.0;
    background: url(../../assets/images/overlay.png);
    border-radius: 0.35em;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.content-blog__list .work-item .thumb:after {
    opacity: 0;
}

.content-blog__list .work-item .thumb:hover:after {
    opacity: 1.0;
    border-radius: 0.35em;
    border: solid 3px rgba(255, 255, 255, 0.5);
    color: #fff;
    content: 'View';
    display: inline-block;
    font-size: 0.8em;
    font-weight: 400;
    left: 50%;
    line-height: 2.25em;
    margin: -1.25em 0 0 -3em;
    padding: 0 1.5em;
    position: absolute;
    text-align: center;
    text-decoration: none;
    top: 50%;
    white-space: nowrap;
}

.content-blog__list .work-item .thumb img {
    display: block;
    width: 100%;
    border-radius: 0.35em;
    padding: 0;
}

.content-blog__list .work-item h3 {
    font-size: 1em;
    margin: 0 0 0.5em 0;
    line-height: 1.5em;
    color: #787878;
}

.content-blog__list .work-item p {
    font-size: 0.8em;
    line-height: 1.5em;
    margin: 0;
}
</style>
