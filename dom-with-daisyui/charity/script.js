function activateTab(event) {
  // 1. Get all tab buttons
  const allTabButtons = document.querySelectorAll('.tab-btn');
  
  // 2. Remove active classes from all buttons
  allTabButtons.forEach(btn => {
    btn.classList.remove('btn-active', 'bg-[#B4F461]');
    btn.classList.add('bg-white');
  });
  
  // 3. Add active classes to clicked button
  const clickedButton = event.target;
  clickedButton.classList.add('btn-active', 'bg-[#B4F461]');
  clickedButton.classList.remove('bg-white');

  // 4. Handle tab content visibility
  const tabValue = clickedButton.value;
  
  // Hide all tab contents first
  document.querySelectorAll('[id="donation"], [id="history"]').forEach(tabContent => {
    tabContent.classList.add('hidden');
    tabContent.classList.remove('block');
    
  });
  
  // Show the selected tab content
  const activeTabContent = document.getElementById(tabValue);
  activeTabContent.classList.remove('hidden');
  activeTabContent.classList.add('block');
}