const express = require("express")
const router = express.Router();

const Expense = require("../models/Expense")

router.post("/expenses", async (req, res) => {
    try {
        const { name, category, amount, date } = req.body;
        const expense = new Expense({
            name, category, amount, date
        });
        await expense.save();
        res.status(201).json(expense)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

router.get("/expenses", async (req, res) => {
    try {
        const expense = await Expense.find();
        res.status(201).json(expense)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

router.get("/expenses/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const expense = await Expense.findById(id);
        if (!expense) {
            return res.status(404).json({
                success:false,
                message:"Expense not Found"
            })
        }
        res.status(200).json(expense)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

router.put("/expenses/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const {name,amount,category,date}=req.body;
        const updatedExpense=await Expense.findByIdAndUpdate(id,{
            name,amount,category,date
        },{new:true})
        if (!updatedExpense) {
            return res.status(404).json({
                success:false,
                message:"Expense not Found"
            })
        }
        res.status(200).json(updatedExpense)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})
router.delete("/expenses/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedExpense= await Expense.findByIdAndDelete(id)
        if (!deletedExpense) {
            return res.status(404).json({
                success:false,
                message:"Expense not Found"
            })
        }
        res.status(200).json(deletedExpense)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})




module.exports = router;