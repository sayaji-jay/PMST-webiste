'use server';

// Get banner data from JSONBin API
export async function get_banner() {
  try {
    // First, let's try to create a new bin or use existing one
    const BIN_ID = "68bbdb3eae596e708fe46865";
    const API_KEY = "$2a$10$w4ASrd7NAxb6l6I8ZNoChuc49LQOV9AzfdZ9wIUzilsdzjZVKbkCC";
    
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      method: "GET",
      headers: {
        "X-Master-Key": API_KEY,
        "X-Bin-Meta": "false"
      },
      cache: 'no-store'
    });

    console.log('Fetching banner data from JSONBin...',response);
    if (!response.ok) {
      throw new Error(`JSONBin API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Banner data fetched successfully:', data);
    
    // Extract banner data from JSONBin response
    const bannerData = data.record || data || {
      isVisible: false,
      text: ""
    };

    return {
      success: true,
      data: bannerData
    };
  } catch (error) {
    console.error('Banner fetch error:', error);
    
    // Fallback to default banner data
    const fallbackData = {
      isVisible: false,
      text: ""
    };
    
    return {
      success: true, // Return success with fallback data
      data: fallbackData,
      warning: `Using fallback data due to API error: ${error.message}`
    };
  }
}

// Create new banner bin with data
export async function create_banner(bannerData = null) {
  try {
    const API_KEY = "$2a$10$w4ASrd7NAxb6l6I8ZNoChuc49LQOV9AzfdZ9wIUzilsdzjZVKbkCC";
    
    console.log('Creating new bin with banner data...');
    const defaultData = bannerData || {
      isVisible: false,
      text: "Test Data Blank"
    };
    
    const createResponse = await fetch("https://api.jsonbin.io/v3/b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
        "X-Bin-Name": "PMST Banner Data"
      },
      body: JSON.stringify(defaultData)
    });
    
    if (!createResponse.ok) {
      throw new Error(`JSONBin API error: ${createResponse.status} ${createResponse.statusText}`);
    }
    
    const createResult = await createResponse.json();
    console.log('New bin created:', createResult);
    
    return {
      success: true,
      data: {
        binId: createResult.metadata.id,
        bannerData: defaultData,
        metadata: createResult.metadata
      },
      message: 'Banner bin created successfully'
    };
  } catch (error) {
    console.error('Banner creation error:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to create banner bin'
    };
  }
}

// Update existing banner data in JSONBin API
export async function update_banner(bannerData) {
  try {
    const BIN_ID = "68bbdb3eae596e708fe46865";
    const API_KEY = "$2a$10$w4ASrd7NAxb6l6I8ZNoChuc49LQOV9AzfdZ9wIUzilsdzjZVKbkCC";
    
    console.log('Updating banner data in existing bin...', bannerData);
    
    const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify(bannerData)
    });
    
    if (!updateResponse.ok) {
      throw new Error(`JSONBin API error: ${updateResponse.status} ${updateResponse.statusText}`);
    }
    
    const updateResult = await updateResponse.json();
    console.log('Banner data updated successfully:', updateResult);
    
    return {
      success: true,
      data: updateResult,
      message: 'Banner updated successfully'
    };
  } catch (error) {
    console.error('Banner update error:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to update banner'
    };
  }
}