/**
 * Starbot - Unofficial Starbucks API wrapper
 * Find stores, check card balance, reload, order
 */

export class StarbotAPI {
  constructor() {
    this.baseURL = 'https://www.starbucks.ca';
    this.token = null;
    this.userInfo = null;
  }

  /**
   * Login to Starbucks account
   * @param {string} email - Account email
   * @param {string} password - Account password
   */
  async login(email, password) {
    // Real implementation would authenticate with Starbucks API
    this.token = 'mock_auth_token_' + Date.now();
    this.userInfo = {
      email,
      name: 'Joshua Trommel',
      cardNumber: '1234567890123456',
      balance: 25.50,
      rewards: 120
    };
    return this.userInfo;
  }

  /**
   * Get current user info (requires login)
   */
  async getUserInfo() {
    if (!this.token) {
      throw new Error('Not authenticated. Call login() first.');
    }
    return this.userInfo;
  }

  /**
   * Find nearby Starbucks stores
   * @param {string} address - Street address or postal code
   * @param {number} limit - Max results (default 10)
   */
  async stores(address, limit = 10) {
    // Note: Real implementation would use Starbucks store locator API
    // Mock data based on actual Brookswood/Langley locations
    return {
      stores: [
        {
          id: '12345',
          name: 'Starbucks - Save-On-Foods (200 St)',
          address: '4061 200 St, Langley, BC V3A 1K8',
          distance: '0.1 km',
          hours: 'Mon-Sun 6:00am-8:00pm',
          phone: '604-534-1234',
          features: ['Mobile Order', 'WiFi']
        },
        {
          id: '12346',
          name: 'Starbucks - Willowbrook Mall',
          address: '19705 Fraser Hwy, Langley, BC',
          distance: '2.3 km',
          hours: 'Mon-Sun 7:00am-9:00pm',
          phone: '604-532-4567',
          features: ['Mobile Order', 'Drive-Thru', 'WiFi']
        }
      ]
    };
  }

  /**
   * Get Starbucks card balance
   * @param {string} cardNumber - 16-digit card number
   * @param {string} pin - Card PIN
   */
  async cardBalance(cardNumber, pin) {
    // Real implementation would call Starbucks card API
    return {
      balance: 25.50,
      rewards: 120,
      cardNumber: cardNumber.slice(-4)
    };
  }

  /**
   * Reload Starbucks card
   * @param {string} cardNumber
   * @param {number} amount - Amount in CAD
   * @param {object} payment - Payment method
   */
  async reload(cardNumber, amount, payment) {
    // Real implementation would process reload
    return {
      success: true,
      newBalance: amount,
      transaction: `RELOAD-${Date.now()}`
    };
  }

  /**
   * Get menu for a store
   * @param {string} storeId
   */
  async menu(storeId) {
    return {
      categories: {
        drinks: ['Espresso', 'Frappuccino', 'Iced Coffee', 'Tea'],
        food: ['Breakfast', 'Lunch', 'Snacks', 'Pastries']
      },
      popular: [
        { name: 'Caffe Latte', price: 5.45, sizes: ['Tall', 'Grande', 'Venti'] },
        { name: 'Pike Place Roast', price: 2.95, sizes: ['Tall', 'Grande', 'Venti'] },
        { name: 'Caramel Frappuccino', price: 6.25, sizes: ['Tall', 'Grande', 'Venti'] }
      ]
    };
  }
}
