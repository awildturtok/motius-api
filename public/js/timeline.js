$(function()
{
    $(".timeline").slideUp();

    $(".project").each(function()
    {
        let milestones = $(this).data('project').milestones;

        if(milestones.length == 0)
            return;

        $(this).addClass('clickable');

        let items = new vis.DataView(
            new vis.DataSet(milestones)
            , {
                fields:
                {
                    'id' : 'id',
                    'name' : 'content',
                    'start_date' : 'start',
                    'end_date' : 'end'
                }
            }
        );

        let container = $(this).find('.timeline');

        let timeline = new vis.Timeline(container[0], items.get(), { });
    });

    $(".project").click(function ()
    {
        if($(this).find(".timeline").is(":visible"))
            return;

        $(".timeline").slideUp();
        $(this).find(".timeline").slideDown();
    });
});