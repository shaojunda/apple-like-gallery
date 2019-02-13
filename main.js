$(function() {
  let slideWidth = 920
  let slides = $('.images')
  let timerId
  let slideSize = $('.images > img').length
  let index = 0
  $('.menu li.item').on('click', function(event) {
    $('.menu li.item.active').removeClass('active')
    let $currentTarge = $(event.currentTarget)
    $currentTarge.addClass('active')
    let index = $currentTarge.index() - 1
    slides.css({ transform: `translateX(-${ (index) * slideWidth }px)` })
  })

  setTimer()

  function playSlide(index) {
    $('.menu li.item').eq(index).trigger('click')
  }

  function setTimer() {
    timerId = setInterval(() => {
      console.log(index % slideSize)
      playSlide(index % slideSize)
      index += 1
    }, 2000);
  }

  $('.window').on('mouseenter', function() {
    clearInterval(timerId)
  })

  $('.window').on('mouseleave', function() {
    setTimer()
  })
})
