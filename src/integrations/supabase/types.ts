export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      agents: {
        Row: {
          created_at: string
          id: string
          name: string
          quality_score: number | null
          status: string | null
          team_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          quality_score?: number | null
          status?: string | null
          team_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          quality_score?: number | null
          status?: string | null
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agents_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_decision_patterns: {
        Row: {
          context_data: Json
          country_benefit_score: number | null
          created_at: string
          decision_made: string
          decision_type: string
          id: string
          lessons_learned: string | null
          outcome_rating: number | null
          success_metrics: Json | null
          updated_at: string
        }
        Insert: {
          context_data: Json
          country_benefit_score?: number | null
          created_at?: string
          decision_made: string
          decision_type: string
          id?: string
          lessons_learned?: string | null
          outcome_rating?: number | null
          success_metrics?: Json | null
          updated_at?: string
        }
        Update: {
          context_data?: Json
          country_benefit_score?: number | null
          created_at?: string
          decision_made?: string
          decision_type?: string
          id?: string
          lessons_learned?: string | null
          outcome_rating?: number | null
          success_metrics?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      ai_generated_news: {
        Row: {
          category: string
          content: string
          created_at: string | null
          excerpt: string
          id: string
          image_url: string | null
          language: string
          published_at: string | null
          source_hash: string
          title: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          excerpt: string
          id?: string
          image_url?: string | null
          language?: string
          published_at?: string | null
          source_hash: string
          title: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          excerpt?: string
          id?: string
          image_url?: string | null
          language?: string
          published_at?: string | null
          source_hash?: string
          title?: string
        }
        Relationships: []
      }
      ai_harm_prevention: {
        Row: {
          azerbaijan_impact_assessment: string | null
          blocked: boolean | null
          created_at: string
          harm_description: string
          id: string
          monitoring_status: string | null
          override_reason: string | null
          potential_harm_type: string
          prevention_action: string
          recommendation_id: string | null
          resolved_at: string | null
          risk_level: string
        }
        Insert: {
          azerbaijan_impact_assessment?: string | null
          blocked?: boolean | null
          created_at?: string
          harm_description: string
          id?: string
          monitoring_status?: string | null
          override_reason?: string | null
          potential_harm_type: string
          prevention_action: string
          recommendation_id?: string | null
          resolved_at?: string | null
          risk_level: string
        }
        Update: {
          azerbaijan_impact_assessment?: string | null
          blocked?: boolean | null
          created_at?: string
          harm_description?: string
          id?: string
          monitoring_status?: string | null
          override_reason?: string | null
          potential_harm_type?: string
          prevention_action?: string
          recommendation_id?: string | null
          resolved_at?: string | null
          risk_level?: string
        }
        Relationships: []
      }
      ai_local_learning: {
        Row: {
          accuracy_improvement: number | null
          actual_output: Json | null
          applied_to_future_decisions: boolean | null
          azerbaijan_context: Json | null
          created_at: string
          expected_output: Json | null
          id: string
          input_data: Json
          learning_outcome: string | null
          learning_type: string
          model_version: string | null
        }
        Insert: {
          accuracy_improvement?: number | null
          actual_output?: Json | null
          applied_to_future_decisions?: boolean | null
          azerbaijan_context?: Json | null
          created_at?: string
          expected_output?: Json | null
          id?: string
          input_data: Json
          learning_outcome?: string | null
          learning_type: string
          model_version?: string | null
        }
        Update: {
          accuracy_improvement?: number | null
          actual_output?: Json | null
          applied_to_future_decisions?: boolean | null
          azerbaijan_context?: Json | null
          created_at?: string
          expected_output?: Json | null
          id?: string
          input_data?: Json
          learning_outcome?: string | null
          learning_type?: string
          model_version?: string | null
        }
        Relationships: []
      }
      ai_medical_recommendations: {
        Row: {
          category: string
          confidence_score: number | null
          created_at: string | null
          data_sources: string[] | null
          generated_by: string | null
          id: string
          implementation_status: string | null
          original_data: Json | null
          priority: string | null
          prompt_used: string | null
          recommendation_text: string
          related_metrics: string[] | null
          subcategory: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          confidence_score?: number | null
          created_at?: string | null
          data_sources?: string[] | null
          generated_by?: string | null
          id?: string
          implementation_status?: string | null
          original_data?: Json | null
          priority?: string | null
          prompt_used?: string | null
          recommendation_text: string
          related_metrics?: string[] | null
          subcategory?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          confidence_score?: number | null
          created_at?: string | null
          data_sources?: string[] | null
          generated_by?: string | null
          id?: string
          implementation_status?: string | null
          original_data?: Json | null
          priority?: string | null
          prompt_used?: string | null
          recommendation_text?: string
          related_metrics?: string[] | null
          subcategory?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_minister_priorities: {
        Row: {
          azerbaijan_benefit_weight: number | null
          created_at: string
          description: string
          id: string
          is_active: boolean | null
          priority_level: number
          priority_name: string
          success_criteria: Json | null
          target_sectors: Json | null
          updated_at: string
        }
        Insert: {
          azerbaijan_benefit_weight?: number | null
          created_at?: string
          description: string
          id?: string
          is_active?: boolean | null
          priority_level: number
          priority_name: string
          success_criteria?: Json | null
          target_sectors?: Json | null
          updated_at?: string
        }
        Update: {
          azerbaijan_benefit_weight?: number | null
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean | null
          priority_level?: number
          priority_name?: string
          success_criteria?: Json | null
          target_sectors?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      ai_recommendation_quality: {
        Row: {
          accuracy_score: number | null
          actual_impact_score: number | null
          citizen_feedback_score: number | null
          economic_benefit: number | null
          evaluated_at: string
          evaluation_notes: string | null
          evaluator_type: string | null
          id: string
          implementation_success: boolean | null
          predicted_impact_score: number | null
          recommendation_id: string | null
          social_benefit_score: number | null
        }
        Insert: {
          accuracy_score?: number | null
          actual_impact_score?: number | null
          citizen_feedback_score?: number | null
          economic_benefit?: number | null
          evaluated_at?: string
          evaluation_notes?: string | null
          evaluator_type?: string | null
          id?: string
          implementation_success?: boolean | null
          predicted_impact_score?: number | null
          recommendation_id?: string | null
          social_benefit_score?: number | null
        }
        Update: {
          accuracy_score?: number | null
          actual_impact_score?: number | null
          citizen_feedback_score?: number | null
          economic_benefit?: number | null
          evaluated_at?: string
          evaluation_notes?: string | null
          evaluator_type?: string | null
          id?: string
          implementation_success?: boolean | null
          predicted_impact_score?: number | null
          recommendation_id?: string | null
          social_benefit_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_recommendation_quality_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "ai_recommendations"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_recommendations: {
        Row: {
          affected_regions: string[] | null
          ai_confidence_score: number | null
          budget_required: number | null
          category: string
          created_at: string | null
          description: string
          id: string
          impact_description: string | null
          kpis: Json | null
          priority: string
          progress_percent: number | null
          recommendation_text: string
          responsible_ministry_id: string | null
          risk_level: string | null
          status: string | null
          tags: string[] | null
          timeline_months: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          affected_regions?: string[] | null
          ai_confidence_score?: number | null
          budget_required?: number | null
          category: string
          created_at?: string | null
          description: string
          id?: string
          impact_description?: string | null
          kpis?: Json | null
          priority: string
          progress_percent?: number | null
          recommendation_text: string
          responsible_ministry_id?: string | null
          risk_level?: string | null
          status?: string | null
          tags?: string[] | null
          timeline_months?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          affected_regions?: string[] | null
          ai_confidence_score?: number | null
          budget_required?: number | null
          category?: string
          created_at?: string | null
          description?: string
          id?: string
          impact_description?: string | null
          kpis?: Json | null
          priority?: string
          progress_percent?: number | null
          recommendation_text?: string
          responsible_ministry_id?: string | null
          risk_level?: string | null
          status?: string | null
          tags?: string[] | null
          timeline_months?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_recommendations_responsible_ministry_id_fkey"
            columns: ["responsible_ministry_id"]
            isOneToOne: false
            referencedRelation: "ministries"
            referencedColumns: ["id"]
          },
        ]
      }
      azstat_cache: {
        Row: {
          category: string
          created_at: string
          data: Json
          id: string
          region: string | null
          updated_at: string
          year: number
        }
        Insert: {
          category: string
          created_at?: string
          data: Json
          id?: string
          region?: string | null
          updated_at?: string
          year: number
        }
        Update: {
          category?: string
          created_at?: string
          data?: Json
          id?: string
          region?: string | null
          updated_at?: string
          year?: number
        }
        Relationships: []
      }
      calls: {
        Row: {
          agent_id: string | null
          created_at: string
          duration_seconds: number | null
          id: string
          lead_id: string | null
          refusal_reason: string | null
          result: string | null
          status: string | null
          wait_time_seconds: number | null
        }
        Insert: {
          agent_id?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          lead_id?: string | null
          refusal_reason?: string | null
          result?: string | null
          status?: string | null
          wait_time_seconds?: number | null
        }
        Update: {
          agent_id?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          lead_id?: string | null
          refusal_reason?: string | null
          result?: string | null
          status?: string | null
          wait_time_seconds?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "calls_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calls_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      child_health_data: {
        Row: {
          age_group: string | null
          created_at: string | null
          data_source: string | null
          file_source: string | null
          gender: string | null
          id: string
          indicator_name: string
          region: string | null
          unit: string | null
          updated_at: string | null
          value: number
          year: number
        }
        Insert: {
          age_group?: string | null
          created_at?: string | null
          data_source?: string | null
          file_source?: string | null
          gender?: string | null
          id?: string
          indicator_name: string
          region?: string | null
          unit?: string | null
          updated_at?: string | null
          value: number
          year: number
        }
        Update: {
          age_group?: string | null
          created_at?: string | null
          data_source?: string | null
          file_source?: string | null
          gender?: string | null
          id?: string
          indicator_name?: string
          region?: string | null
          unit?: string | null
          updated_at?: string | null
          value?: number
          year?: number
        }
        Relationships: []
      }
      csv_import_log: {
        Row: {
          error_message: string | null
          file_hash: string | null
          filename: string
          id: string
          imported_at: string
          records_count: number | null
          status: string | null
        }
        Insert: {
          error_message?: string | null
          file_hash?: string | null
          filename: string
          id?: string
          imported_at?: string
          records_count?: number | null
          status?: string | null
        }
        Update: {
          error_message?: string | null
          file_hash?: string | null
          filename?: string
          id?: string
          imported_at?: string
          records_count?: number | null
          status?: string | null
        }
        Relationships: []
      }
      data_classification: {
        Row: {
          classification_level: string
          classified_at: string
          contains_sensitive_info: boolean | null
          content_summary: string | null
          data_hash: string
          expires_at: string | null
          external_api_allowed: boolean | null
          id: string
          processing_restrictions: Json | null
        }
        Insert: {
          classification_level: string
          classified_at?: string
          contains_sensitive_info?: boolean | null
          content_summary?: string | null
          data_hash: string
          expires_at?: string | null
          external_api_allowed?: boolean | null
          id?: string
          processing_restrictions?: Json | null
        }
        Update: {
          classification_level?: string
          classified_at?: string
          contains_sensitive_info?: boolean | null
          content_summary?: string | null
          data_hash?: string
          expires_at?: string | null
          external_api_allowed?: boolean | null
          id?: string
          processing_restrictions?: Json | null
        }
        Relationships: []
      }
      demographic_health: {
        Row: {
          births_total: number | null
          created_at: string | null
          data_source: string | null
          deaths_total: number | null
          file_source: string | null
          id: string
          indicator_name: string
          infant_mortality_rate: number | null
          life_expectancy_female: number | null
          life_expectancy_male: number | null
          region: string | null
          total_population: number | null
          updated_at: string | null
          year: number
        }
        Insert: {
          births_total?: number | null
          created_at?: string | null
          data_source?: string | null
          deaths_total?: number | null
          file_source?: string | null
          id?: string
          indicator_name: string
          infant_mortality_rate?: number | null
          life_expectancy_female?: number | null
          life_expectancy_male?: number | null
          region?: string | null
          total_population?: number | null
          updated_at?: string | null
          year: number
        }
        Update: {
          births_total?: number | null
          created_at?: string | null
          data_source?: string | null
          deaths_total?: number | null
          file_source?: string | null
          id?: string
          indicator_name?: string
          infant_mortality_rate?: number | null
          life_expectancy_female?: number | null
          life_expectancy_male?: number | null
          region?: string | null
          total_population?: number | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      disease_statistics: {
        Row: {
          age_group: string | null
          cases_per_100k: number | null
          cases_total: number | null
          created_at: string | null
          data_source: string | null
          deaths_total: number | null
          disease_code: string | null
          disease_name: string
          file_source: string | null
          gender: string | null
          id: string
          mortality_rate: number | null
          region: string | null
          updated_at: string | null
          year: number
        }
        Insert: {
          age_group?: string | null
          cases_per_100k?: number | null
          cases_total?: number | null
          created_at?: string | null
          data_source?: string | null
          deaths_total?: number | null
          disease_code?: string | null
          disease_name: string
          file_source?: string | null
          gender?: string | null
          id?: string
          mortality_rate?: number | null
          region?: string | null
          updated_at?: string | null
          year: number
        }
        Update: {
          age_group?: string | null
          cases_per_100k?: number | null
          cases_total?: number | null
          created_at?: string | null
          data_source?: string | null
          deaths_total?: number | null
          disease_code?: string | null
          disease_name?: string
          file_source?: string | null
          gender?: string | null
          id?: string
          mortality_rate?: number | null
          region?: string | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      emergency_readiness: {
        Row: {
          ai_assessment: string | null
          available_equipment: Json | null
          available_personnel: number | null
          budget_allocated: number | null
          budget_used: number | null
          certification_status: string | null
          created_at: string
          id: string
          improvement_recommendations: string[] | null
          last_drill_date: string | null
          readiness_level: string
          region: string
          response_time_minutes: number | null
          service_name: string
          updated_at: string
        }
        Insert: {
          ai_assessment?: string | null
          available_equipment?: Json | null
          available_personnel?: number | null
          budget_allocated?: number | null
          budget_used?: number | null
          certification_status?: string | null
          created_at?: string
          id?: string
          improvement_recommendations?: string[] | null
          last_drill_date?: string | null
          readiness_level?: string
          region: string
          response_time_minutes?: number | null
          service_name: string
          updated_at?: string
        }
        Update: {
          ai_assessment?: string | null
          available_equipment?: Json | null
          available_personnel?: number | null
          budget_allocated?: number | null
          budget_used?: number | null
          certification_status?: string | null
          created_at?: string
          id?: string
          improvement_recommendations?: string[] | null
          last_drill_date?: string | null
          readiness_level?: string
          region?: string
          response_time_minutes?: number | null
          service_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      emergency_situations: {
        Row: {
          affected_population: number | null
          ai_analysis: string | null
          ai_recommendations: string | null
          coordinates: Json | null
          country: string
          created_at: string
          description: string
          economic_impact: number | null
          emergency_type: string
          end_date: string | null
          external_sources: Json | null
          id: string
          impact_on_azerbaijan: string | null
          location: string
          monitoring_data: Json | null
          severity_level: string
          start_date: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          affected_population?: number | null
          ai_analysis?: string | null
          ai_recommendations?: string | null
          coordinates?: Json | null
          country?: string
          created_at?: string
          description: string
          economic_impact?: number | null
          emergency_type: string
          end_date?: string | null
          external_sources?: Json | null
          id?: string
          impact_on_azerbaijan?: string | null
          location: string
          monitoring_data?: Json | null
          severity_level?: string
          start_date?: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          affected_population?: number | null
          ai_analysis?: string | null
          ai_recommendations?: string | null
          coordinates?: Json | null
          country?: string
          created_at?: string
          description?: string
          economic_impact?: number | null
          emergency_type?: string
          end_date?: string | null
          external_sources?: Json | null
          id?: string
          impact_on_azerbaijan?: string | null
          location?: string
          monitoring_data?: Json | null
          severity_level?: string
          start_date?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      external_api_audit: {
        Row: {
          api_provider: string
          contains_classified_data: boolean | null
          created_at: string
          data_sent_hash: string | null
          endpoint: string
          error_message: string | null
          id: string
          processing_time_ms: number | null
          request_data: Json | null
          request_purpose: string
          response_data: Json | null
          success: boolean | null
          user_session_id: string | null
        }
        Insert: {
          api_provider: string
          contains_classified_data?: boolean | null
          created_at?: string
          data_sent_hash?: string | null
          endpoint: string
          error_message?: string | null
          id?: string
          processing_time_ms?: number | null
          request_data?: Json | null
          request_purpose: string
          response_data?: Json | null
          success?: boolean | null
          user_session_id?: string | null
        }
        Update: {
          api_provider?: string
          contains_classified_data?: boolean | null
          created_at?: string
          data_sent_hash?: string | null
          endpoint?: string
          error_message?: string | null
          id?: string
          processing_time_ms?: number | null
          request_data?: Json | null
          request_purpose?: string
          response_data?: Json | null
          success?: boolean | null
          user_session_id?: string | null
        }
        Relationships: []
      }
      health_trends_analysis: {
        Row: {
          ai_interpretation: string | null
          analysis_date: string | null
          forecast_confidence: number | null
          id: string
          metric_id: string | null
          seasonality_detected: boolean | null
          trend_strength: number | null
          trend_type: string
        }
        Insert: {
          ai_interpretation?: string | null
          analysis_date?: string | null
          forecast_confidence?: number | null
          id?: string
          metric_id?: string | null
          seasonality_detected?: boolean | null
          trend_strength?: number | null
          trend_type: string
        }
        Update: {
          ai_interpretation?: string | null
          analysis_date?: string | null
          forecast_confidence?: number | null
          id?: string
          metric_id?: string | null
          seasonality_detected?: boolean | null
          trend_strength?: number | null
          trend_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "health_trends_analysis_metric_id_fkey"
            columns: ["metric_id"]
            isOneToOne: false
            referencedRelation: "metrics"
            referencedColumns: ["id"]
          },
        ]
      }
      international_cooperation: {
        Row: {
          agreement_status: string | null
          ai_evaluation: string | null
          communication_channels: Json | null
          cooperation_type: string
          created_at: string
          effectiveness_rating: number | null
          id: string
          improvement_suggestions: string[] | null
          last_interaction_date: string | null
          partner_country: string
          shared_resources: Json | null
          updated_at: string
        }
        Insert: {
          agreement_status?: string | null
          ai_evaluation?: string | null
          communication_channels?: Json | null
          cooperation_type: string
          created_at?: string
          effectiveness_rating?: number | null
          id?: string
          improvement_suggestions?: string[] | null
          last_interaction_date?: string | null
          partner_country: string
          shared_resources?: Json | null
          updated_at?: string
        }
        Update: {
          agreement_status?: string | null
          ai_evaluation?: string | null
          communication_channels?: Json | null
          cooperation_type?: string
          created_at?: string
          effectiveness_rating?: number | null
          id?: string
          improvement_suggestions?: string[] | null
          last_interaction_date?: string | null
          partner_country?: string
          shared_resources?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      labor_market_data: {
        Row: {
          created_at: string | null
          data_source: string | null
          demographic_group: string | null
          id: string
          indicator_type: string
          notes: string | null
          period_date: string
          region: string | null
          sector: string | null
          unit: string
          updated_at: string | null
          value: number
        }
        Insert: {
          created_at?: string | null
          data_source?: string | null
          demographic_group?: string | null
          id?: string
          indicator_type: string
          notes?: string | null
          period_date: string
          region?: string | null
          sector?: string | null
          unit: string
          updated_at?: string | null
          value: number
        }
        Update: {
          created_at?: string | null
          data_source?: string | null
          demographic_group?: string | null
          id?: string
          indicator_type?: string
          notes?: string | null
          period_date?: string
          region?: string | null
          sector?: string | null
          unit?: string
          updated_at?: string | null
          value?: number
        }
        Relationships: []
      }
      leads: {
        Row: {
          created_at: string
          id: string
          status: string | null
          traffic_source_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          status?: string | null
          traffic_source_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          status?: string | null
          traffic_source_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_traffic_source_id_fkey"
            columns: ["traffic_source_id"]
            isOneToOne: false
            referencedRelation: "traffic_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      medical_card_details: {
        Row: {
          ai_insights: string | null
          card_id: string
          card_type: string
          created_at: string | null
          data_sources: string[]
          detailed_analysis: string
          id: string
          last_updated: string | null
          recommendations: string[] | null
          statistics: Json | null
          trends: Json | null
        }
        Insert: {
          ai_insights?: string | null
          card_id: string
          card_type: string
          created_at?: string | null
          data_sources: string[]
          detailed_analysis: string
          id?: string
          last_updated?: string | null
          recommendations?: string[] | null
          statistics?: Json | null
          trends?: Json | null
        }
        Update: {
          ai_insights?: string | null
          card_id?: string
          card_type?: string
          created_at?: string | null
          data_sources?: string[]
          detailed_analysis?: string
          id?: string
          last_updated?: string | null
          recommendations?: string[] | null
          statistics?: Json | null
          trends?: Json | null
        }
        Relationships: []
      }
      medical_facilities: {
        Row: {
          beds_occupied: number | null
          beds_total: number | null
          created_at: string | null
          data_source: string | null
          doctors_count: number | null
          equipment_score: number | null
          facility_name: string
          facility_type: string
          file_source: string | null
          id: string
          nurses_count: number | null
          patient_satisfaction: number | null
          region: string
          staff_total: number | null
          updated_at: string | null
          year: number
        }
        Insert: {
          beds_occupied?: number | null
          beds_total?: number | null
          created_at?: string | null
          data_source?: string | null
          doctors_count?: number | null
          equipment_score?: number | null
          facility_name: string
          facility_type: string
          file_source?: string | null
          id?: string
          nurses_count?: number | null
          patient_satisfaction?: number | null
          region: string
          staff_total?: number | null
          updated_at?: string | null
          year: number
        }
        Update: {
          beds_occupied?: number | null
          beds_total?: number | null
          created_at?: string | null
          data_source?: string | null
          doctors_count?: number | null
          equipment_score?: number | null
          facility_name?: string
          facility_type?: string
          file_source?: string | null
          id?: string
          nurses_count?: number | null
          patient_satisfaction?: number | null
          region?: string
          staff_total?: number | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      medical_statistics: {
        Row: {
          category: string
          created_at: string | null
          data_source: string | null
          file_source: string | null
          id: string
          indicator_code: string | null
          indicator_name: string
          notes: string | null
          period: string | null
          region: string | null
          subcategory: string | null
          unit: string | null
          updated_at: string | null
          value: number
          year: number
        }
        Insert: {
          category: string
          created_at?: string | null
          data_source?: string | null
          file_source?: string | null
          id?: string
          indicator_code?: string | null
          indicator_name: string
          notes?: string | null
          period?: string | null
          region?: string | null
          subcategory?: string | null
          unit?: string | null
          updated_at?: string | null
          value: number
          year: number
        }
        Update: {
          category?: string
          created_at?: string | null
          data_source?: string | null
          file_source?: string | null
          id?: string
          indicator_code?: string | null
          indicator_name?: string
          notes?: string | null
          period?: string | null
          region?: string | null
          subcategory?: string | null
          unit?: string | null
          updated_at?: string | null
          value?: number
          year?: number
        }
        Relationships: []
      }
      metric_categories: {
        Row: {
          color: string
          created_at: string | null
          description: string | null
          display_name: string
          icon: string | null
          id: string
          name: string
        }
        Insert: {
          color?: string
          created_at?: string | null
          description?: string | null
          display_name: string
          icon?: string | null
          id?: string
          name: string
        }
        Update: {
          color?: string
          created_at?: string | null
          description?: string | null
          display_name?: string
          icon?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      metric_data: {
        Row: {
          change_percent: number | null
          created_at: string | null
          data_quality_score: number | null
          id: string
          metric_id: string | null
          notes: string | null
          period_date: string
          previous_value: number | null
          value: number
        }
        Insert: {
          change_percent?: number | null
          created_at?: string | null
          data_quality_score?: number | null
          id?: string
          metric_id?: string | null
          notes?: string | null
          period_date: string
          previous_value?: number | null
          value: number
        }
        Update: {
          change_percent?: number | null
          created_at?: string | null
          data_quality_score?: number | null
          id?: string
          metric_id?: string | null
          notes?: string | null
          period_date?: string
          previous_value?: number | null
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "metric_data_metric_id_fkey"
            columns: ["metric_id"]
            isOneToOne: false
            referencedRelation: "metrics"
            referencedColumns: ["id"]
          },
        ]
      }
      metrics: {
        Row: {
          category_id: string | null
          code: string
          color: string | null
          created_at: string | null
          data_period_end: string | null
          data_period_start: string | null
          data_source: string | null
          description: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          original_source: string | null
          region: string | null
          responsible_ministry: string | null
          title: string
          unit: string | null
          update_frequency: string | null
          updated_at: string | null
        }
        Insert: {
          category_id?: string | null
          code: string
          color?: string | null
          created_at?: string | null
          data_period_end?: string | null
          data_period_start?: string | null
          data_source?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          original_source?: string | null
          region?: string | null
          responsible_ministry?: string | null
          title: string
          unit?: string | null
          update_frequency?: string | null
          updated_at?: string | null
        }
        Update: {
          category_id?: string | null
          code?: string
          color?: string | null
          created_at?: string | null
          data_period_end?: string | null
          data_period_start?: string | null
          data_source?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          original_source?: string | null
          region?: string | null
          responsible_ministry?: string | null
          title?: string
          unit?: string | null
          update_frequency?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "metrics_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "metric_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      ministries: {
        Row: {
          budget_allocation: number | null
          contact_info: Json | null
          created_at: string | null
          description: string | null
          id: string
          minister_name: string | null
          name: string
          performance_score: number | null
          priority_level: string | null
          short_name: string | null
          updated_at: string | null
        }
        Insert: {
          budget_allocation?: number | null
          contact_info?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          minister_name?: string | null
          name: string
          performance_score?: number | null
          priority_level?: string | null
          short_name?: string | null
          updated_at?: string | null
        }
        Update: {
          budget_allocation?: number | null
          contact_info?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          minister_name?: string | null
          name?: string
          performance_score?: number | null
          priority_level?: string | null
          short_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ministry_kpis: {
        Row: {
          created_at: string | null
          current_value: number | null
          deadline: string | null
          id: string
          ministry_id: string | null
          name: string
          status: string | null
          target_value: number | null
          unit: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_value?: number | null
          deadline?: string | null
          id?: string
          ministry_id?: string | null
          name: string
          status?: string | null
          target_value?: number | null
          unit?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_value?: number | null
          deadline?: string | null
          id?: string
          ministry_id?: string | null
          name?: string
          status?: string | null
          target_value?: number | null
          unit?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ministry_kpis_ministry_id_fkey"
            columns: ["ministry_id"]
            isOneToOne: false
            referencedRelation: "ministries"
            referencedColumns: ["id"]
          },
        ]
      }
      news_generation_log: {
        Row: {
          created_at: string | null
          error_message: string | null
          generated_count: number
          id: string
          success: boolean
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          generated_count?: number
          id?: string
          success?: boolean
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          generated_count?: number
          id?: string
          success?: boolean
        }
        Relationships: []
      }
      nutrition_data: {
        Row: {
          availability_per_capita: number | null
          consumption_per_capita: number | null
          created_at: string | null
          data_source: string | null
          file_source: string | null
          food_category: string | null
          id: string
          nutrient_name: string
          region: string | null
          unit: string | null
          updated_at: string | null
          year: number
        }
        Insert: {
          availability_per_capita?: number | null
          consumption_per_capita?: number | null
          created_at?: string | null
          data_source?: string | null
          file_source?: string | null
          food_category?: string | null
          id?: string
          nutrient_name: string
          region?: string | null
          unit?: string | null
          updated_at?: string | null
          year: number
        }
        Update: {
          availability_per_capita?: number | null
          consumption_per_capita?: number | null
          created_at?: string | null
          data_source?: string | null
          file_source?: string | null
          food_category?: string | null
          id?: string
          nutrient_name?: string
          region?: string | null
          unit?: string | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      orders: {
        Row: {
          created_at: string
          delivered_at: string | null
          delivery_status: string | null
          id: string
          is_repeat_purchase: boolean | null
          sale_id: string | null
        }
        Insert: {
          created_at?: string
          delivered_at?: string | null
          delivery_status?: string | null
          id?: string
          is_repeat_purchase?: boolean | null
          sale_id?: string | null
        }
        Update: {
          created_at?: string
          delivered_at?: string | null
          delivery_status?: string | null
          id?: string
          is_repeat_purchase?: boolean | null
          sale_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          badge: string | null
          benefits: Json | null
          category: string
          created_at: string | null
          description: string
          id: number
          image_url: string
          in_stock: number | null
          is_active: boolean | null
          keywords: Json | null
          line_url: string | null
          name: string
          original_price: string | null
          price: string
          rating: number | null
          reviews_count: number | null
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          badge?: string | null
          benefits?: Json | null
          category: string
          created_at?: string | null
          description: string
          id: number
          image_url: string
          in_stock?: number | null
          is_active?: boolean | null
          keywords?: Json | null
          line_url?: string | null
          name: string
          original_price?: string | null
          price: string
          rating?: number | null
          reviews_count?: number | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          badge?: string | null
          benefits?: Json | null
          category?: string
          created_at?: string | null
          description?: string
          id?: number
          image_url?: string
          in_stock?: number | null
          is_active?: boolean | null
          keywords?: Json | null
          line_url?: string | null
          name?: string
          original_price?: string | null
          price?: string
          rating?: number | null
          reviews_count?: number | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      recommendation_progress: {
        Row: {
          completion_date: string | null
          created_at: string | null
          id: string
          milestone_name: string
          notes: string | null
          recommendation_id: string | null
          status: string | null
          target_date: string | null
        }
        Insert: {
          completion_date?: string | null
          created_at?: string | null
          id?: string
          milestone_name: string
          notes?: string | null
          recommendation_id?: string | null
          status?: string | null
          target_date?: string | null
        }
        Update: {
          completion_date?: string | null
          created_at?: string | null
          id?: string
          milestone_name?: string
          notes?: string | null
          recommendation_id?: string | null
          status?: string | null
          target_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recommendation_progress_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "ai_recommendations"
            referencedColumns: ["id"]
          },
        ]
      }
      risk_monitoring: {
        Row: {
          ai_prediction: string | null
          created_at: string
          current_level: string
          forecast_level: string | null
          id: string
          last_assessment_date: string | null
          monitoring_parameters: Json | null
          potential_impact: string | null
          probability_percent: number | null
          recommended_actions: string[] | null
          region: string
          risk_type: string
          updated_at: string
        }
        Insert: {
          ai_prediction?: string | null
          created_at?: string
          current_level?: string
          forecast_level?: string | null
          id?: string
          last_assessment_date?: string | null
          monitoring_parameters?: Json | null
          potential_impact?: string | null
          probability_percent?: number | null
          recommended_actions?: string[] | null
          region: string
          risk_type: string
          updated_at?: string
        }
        Update: {
          ai_prediction?: string | null
          created_at?: string
          current_level?: string
          forecast_level?: string | null
          id?: string
          last_assessment_date?: string | null
          monitoring_parameters?: Json | null
          potential_impact?: string | null
          probability_percent?: number | null
          recommended_actions?: string[] | null
          region?: string
          risk_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      sales: {
        Row: {
          agent_id: string | null
          call_id: string | null
          created_at: string
          id: string
          product_id: string | null
          quantity: number | null
          status: string | null
          total_amount: number
        }
        Insert: {
          agent_id?: string | null
          call_id?: string | null
          created_at?: string
          id?: string
          product_id?: string | null
          quantity?: number | null
          status?: string | null
          total_amount: number
        }
        Update: {
          agent_id?: string | null
          call_id?: string | null
          created_at?: string
          id?: string
          product_id?: string | null
          quantity?: number | null
          status?: string | null
          total_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "sales_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_call_id_fkey"
            columns: ["call_id"]
            isOneToOne: false
            referencedRelation: "calls"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          id: string
          name: string
          target_sales: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          target_sales?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          target_sales?: number | null
        }
        Relationships: []
      }
      Test1: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      traffic_sources: {
        Row: {
          created_at: string
          id: string
          name: string
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          type?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
