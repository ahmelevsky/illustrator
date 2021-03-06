/*
 * undefined
 */
var PlacedItems = {
  /*
   * The object's container.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The class name of the object.
   * @type {String}
   */
  typename: undefined,
  
  /*
   * Number of elements in the collection.
   * @type {int}
   */
  length: undefined,
  
  /*
   * Create a placed item.
   * @returns {PlacedItem}
   */
  add: function() {
    return new PlacedItem();
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {PlacedItem}
   */
  getByName: function(name) {
    return new PlacedItem();
  },
  
};
