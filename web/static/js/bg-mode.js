function arroz() {
    $('.bg-dark')
        .removeClass('bg-dark')
        .addClass('bg-light')
    $('.btn-dark')
        .removeClass('btn-dark')
        .addClass('btn-light')
    $('.bg-danger')
        .removeClass('bg-danger')
        .addClass('bg-primary')
    $('.btn-danger')
        .removeClass('btn-danger')
        .addClass('btn-primary')
    $('.text-danger')
        .removeClass('text-danger')
        .addClass('text-primary')
    $('.btn-outline-dark')
        .removeClass('btn-outline-dark')
        .addClass('btn-outline-light')
    $('.text-light')
        .removeClass('text-light')
        .addClass('text-dark')
    $('.account')
        .css('border', '1px solid #202020')
    $('.accountBodyHeader')
        .css('background-color', '#d3dce6')
    $('body')
        .css('background-color', '#dbdbdb')

}