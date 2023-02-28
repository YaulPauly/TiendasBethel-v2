<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Producto::all();
        return $products;
    }

    public function store(Request $request)
    {
        $product = new Producto();
        $product->nombre_producto = $request-> nombre_producto;
        $product->precio = $request-> precio;
        $product->categoria_id = $request-> categoria_id;

        $product->save();
    }

    public function show(string $id)
    {
        $product = Producto::find($id);
        return $product;
    }

    public function update(Request $request, string $id)
    {
        $product = Producto::findOrFail($request->id);
        $product->nombre_producto = $request-> nombre_producto;
        $product->precio = $request-> precio;
        $product->categoria_id = $request-> categoria_id;

        $product->save();
        return $product;
    }

    public function destroy(string $id)
    {
        $product = Producto::destroy($id);
        return $product;
    }
}
