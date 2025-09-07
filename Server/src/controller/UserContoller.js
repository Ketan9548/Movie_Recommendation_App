import User from "../models/user.model";

// get preferences of a user on movies categories
const getUserPreferences = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id)
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        res.json({ preferences: user.preferences, success: true });
    } catch (error) {
        console.error('Error fetching user preferences:', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};


// Update user preferences
const updatePreferences = async (req, res) => {
    const userId = req.user.id;
    const { preferences } = req.body;
    try {
        await User.update({ preferences }, { where: { id: userId } });
        res.json({ message: 'Preferences updated successfully', success: true });
    } catch (error) {
        console.error('Error updating user preferences:', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
}

export { getUserPreferences, updatePreferences };