//$('input').prop('checked', true);

function checkParents($li, state) {
    var $siblings = $li.siblings();
    var $parent = $li.parent().closest('li');
    state = state && $siblings.children('label').find('input').prop('checked');
    $parent.children('label').find('input').prop('checked', state);
    if ($parent.parents('li').length)
        checkParents($parent, state);
}

$('input').change(function () {
    var $cb = $(this);
    var $li = $cb.closest('li');
    console.log($li);
    var state = $cb.prop('checked');
    
    // check all children
    $li.find('input').prop('checked', state);
    
    console.log($li.parents('li'));
    console.log($li.parents('li').length);
    // check all parents, as applicable
    if ($li.parents('li').length)
        checkParents($li, state);
});
