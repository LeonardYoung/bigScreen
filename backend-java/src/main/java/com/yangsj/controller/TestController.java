package com.yangsj.controller;

import com.yangsj.dao.ChartDataDao;
import com.yangsj.dao.ChartInfoDao;
import com.yangsj.entity.ChartData;
import com.yangsj.entity.ChartInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class TestController {

    @GetMapping("/test")
    public String test(){
        return "OK";
    }

    @Autowired
    ChartDataDao chartDataDao;
    @Autowired
    ChartInfoDao chartInfoDao;

    @RequestMapping("/getAllChartData")
    public List<ChartData> getAllChartData(){
        return chartDataDao.getChartData();
    }

    @RequestMapping("/getAllChartInfo")
    public List<ChartInfo> getAllChartInfo() { return chartInfoDao.getChartInfo();}



    @RequestMapping("/fetchChartData")
    public String getOneChartData(
            @RequestParam("chartName") String chartName,
            @RequestParam("seriesName") String seriesName
    ){
        HashMap<String,String> paras = new HashMap<>();
        paras.put("chartName",chartName);
        paras.put("seriesName",seriesName);
        return chartDataDao.getOneChartData(paras);
    }

    @RequestMapping("/submitChartData")
    public String updateOneChartData(
            @RequestParam("chartName") String chartName,
            @RequestParam("seriesName") String seriesName,
            @RequestParam("data") String data
    ){
        HashMap<String,String> paras = new HashMap<>();
        paras.put("chartName",chartName);
        paras.put("seriesName",seriesName);
        paras.put("data",data);
        chartDataDao.updateOneChartData(paras);
        return "OK";
    }


    @RequestMapping("/fetchChartInfo")
    public ChartInfo getOneChartInfo(
            @RequestParam("chartName") String chartName
    ){
        return chartInfoDao.getOneChartInfo(chartName);
    }

    @RequestMapping("/submitChartInfo")
    public String updateOneChartInfo(
            @RequestParam("chartName") String chartName,
            @RequestParam("title") String title,
            @RequestParam("category") String category,
            @RequestParam("series") String series
    ){
        HashMap<String,String> paras = new HashMap<>();
        paras.put("chartName",chartName);
        paras.put("title",title);
        paras.put("categorys",category);
        paras.put("series",series);
        chartInfoDao.updateOneChartInfo(paras);
        return "OK";
    }
}
