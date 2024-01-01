function searchCategory() {
    
    var searchInput = document.getElementById('searchInput').value.toLowerCase();

    
    var categoryPages = {
        'mobiles': 'mobiles.html',
        'watches': 'Watch.html',
        'home appliances': 'HomeApp.html',
        'stationaries': 'stationary.html', 
    };

   
    if (categoryPages.hasOwnProperty(searchInput)) {
        
        window.location.href = categoryPages[searchInput];
    } else {
        
        alert('Category not found. Please try again.');
    }
}
