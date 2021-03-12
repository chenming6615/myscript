async function main(){
    window.scrollBy(0, window.innerHeight);
    await new Promise(r=>setTimeout(r, 1000))
    window.scrollBy(0, window.innerHeight);
    await new Promise(r=>setTimeout(r, 1000))
    window.scrollBy(0, window.innerHeight);
    await new Promise(r=>setTimeout(r, 1000))
    window.scrollTo(0, 0);
    const more_buttons=document.querySelectorAll('.qt_read_more')
    console.log(more_buttons)
    more_buttons.forEach(x=>x.click())
    console.log(1111111111)
}
main()