$(document).ready(function() {
    $.ajax({
        url: 'https://api.bundleproject.org/v1/bundle/version',
        dataType: 'json',
        success: function(json) {
            let data = json.data
            let latest
            if (data.prerelease.installer == null) {
                latest = data.release.installer
            } else {
                latest = data.prerelease.installer
            }

            $('#download').attr("href", "https://github.com/BundleProject/Installer/releases/tag/" + latest)
        }
    });
});