$(document).ready(function() {
    const amenities = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).attr('data-id');
        const amenityName = $(this).attr('data-name');

        if (this.checked) {
            amenities[amenityId] = amenityName;
        } else {
            delete amenities[amenityId];
        }

        const amenityNames = Object.values(amenities);
        $('div.amenities h4').text(amenityNames.join(', '));
    });
});
